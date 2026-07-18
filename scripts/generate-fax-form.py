#!/usr/bin/env python3
"""Generate the fillable FAX order / quote-request form PDF.

Modernised version of the legacy forms at
oilkey.co.jp/factory_express/order.htm (注文書) and mitumori.htm (見積依頼書):
one A4 PDF, page 1 = order form, page 2 = quote request, with fillable
AcroForm fields so customers can type before printing or attach to email.

    python3 scripts/generate-fax-form.py

Requires: reportlab.
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "downloads" / "fax-order-form.pdf"

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
JP = "HeiseiKakuGo-W5"

NAVY = colors.HexColor("#02376B")
RED = colors.HexColor("#C8102E")
GREY = colors.HexColor("#5A6B7E")
LINE = colors.HexColor("#C9D2DD")
FIELD_BG = colors.HexColor("#F2F6FB")
SHADE = colors.HexColor("#E9EDF2")

W, H = A4
M = 40  # page margin
CW = W - 2 * M  # content width


def field(c, name, x, y, w, h, tooltip="", multiline=False):
    c.acroForm.textfield(
        name=name,
        tooltip=tooltip,
        x=x,
        y=y,
        width=w,
        height=h,
        borderWidth=0.6,
        borderColor=LINE,
        fillColor=FIELD_BG,
        textColor=colors.black,
        fontSize=9,
        fieldFlags="multiline" if multiline else "",
    )


def labelled_field(c, name, label, x, y, w, h=20):
    c.setFont(JP, 7.5)
    c.setFillColor(GREY)
    c.drawString(x, y + h + 3, label)
    field(c, name, x, y, w, h, tooltip=label)


def page(c, *, form_id, title, title_en, ref_label, table_cols, shaded_last):
    # Header band
    c.setFillColor(NAVY)
    c.rect(0, H - 78, W, 78, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont(JP, 20)
    c.drawString(M, H - 47, title)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(M, H - 62, title_en)
    c.setFont(JP, 8)
    c.drawRightString(W - M, H - 26, "オイルキー株式会社　F@ctory Express")
    # FAX destination
    c.setFont(JP, 8)
    c.drawRightString(W - M, H - 44, "FAX送信先")
    c.setFont("Helvetica-Bold", 16)
    c.drawRightString(W - M, H - 63, "072-298-7790")

    # Instruction
    c.setFillColor(colors.black)
    c.setFont(JP, 8.5)
    c.drawString(
        M,
        H - 96,
        "ご記入のうえ、FAX（072-298-7790）またはメール（oilkey@oilkey.co.jp）にてお送りください。",
    )

    # Customer block
    y0 = H - 148
    col2 = M + CW / 2 + 12
    colw = CW / 2 - 12
    labelled_field(c, f"{form_id}_company", "貴社名", M, y0, colw)
    labelled_field(c, f"{form_id}_tel", "TEL", col2, y0, colw)
    y1 = y0 - 40
    labelled_field(c, f"{form_id}_person", "所属・御担当者様", M, y1, colw)
    labelled_field(c, f"{form_id}_fax", "FAX", col2, y1, colw)
    y2 = y1 - 40
    labelled_field(c, f"{form_id}_address", "御住所（〒）", M, y2, CW)
    y3 = y2 - 40
    labelled_field(c, f"{form_id}_email", "E-mail", M, y3, colw)
    labelled_field(c, f"{form_id}_ref", ref_label, col2, y3, colw)

    # Items table
    ty = y3 - 32
    c.setFont(JP, 10)
    c.setFillColor(NAVY)
    c.drawString(M, ty, "ご注文・ご依頼内容")
    ty -= 8
    row_h = 24
    head_h = 20
    n_rows = 10
    widths = [w * CW for w in table_cols[1]]
    names = table_cols[0]
    # header row
    c.setFillColor(NAVY)
    c.rect(M, ty - head_h, CW, head_h, stroke=0, fill=1)
    c.setFillColor(colors.white)
    c.setFont(JP, 8)
    x = M
    for name, wd in zip(names, widths):
        c.drawString(x + 4, ty - head_h + 6.5, name)
        x += wd
    # body rows with fields
    for r in range(n_rows):
        ry = ty - head_h - (r + 1) * row_h
        x = M
        for ci, wd in enumerate(widths):
            shaded = shaded_last and ci == len(widths) - 1
            if shaded:
                c.setFillColor(SHADE)
                c.rect(x, ry, wd, row_h, stroke=0, fill=1)
            else:
                field(c, f"{form_id}_r{r}c{ci}", x + 1, ry + 1, wd - 2, row_h - 2, tooltip=names[ci])
            x += wd
        c.setStrokeColor(LINE)
        c.setLineWidth(0.5)
        c.line(M, ry, M + CW, ry)
    # table frame
    c.setStrokeColor(LINE)
    c.rect(M, ty - head_h - n_rows * row_h, CW, head_h + n_rows * row_h, stroke=1, fill=0)
    if shaded_last:
        c.setFont(JP, 6.5)
        c.setFillColor(GREY)
        c.drawRightString(M + CW, ty - head_h - n_rows * row_h - 9, "※「弊社回答価格」欄は弊社記入欄です。")

    # Remarks
    by = ty - head_h - n_rows * row_h - 30
    c.setFont(JP, 10)
    c.setFillColor(NAVY)
    c.drawString(M, by, "ご質問・ご要望・その他連絡事項")
    field(c, f"{form_id}_remarks", M, by - 84, CW, 76, tooltip="ご質問・ご要望・その他連絡事項", multiline=True)

    # Footer
    fy = 58
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(M, fy + 26, W - M, fy + 26)
    c.setFillColor(colors.black)
    c.setFont(JP, 8)
    c.drawString(M, fy + 12, "オイルキー株式会社　〒593-8314 大阪府堺市西区太平寺617")
    c.drawString(M, fy, "TEL 072-284-1711　FAX 072-298-7790　oilkey@oilkey.co.jp")
    c.setFillColor(GREY)
    c.setFont(JP, 7)
    c.drawString(M, fy - 13, "受付時間 9:00〜17:00（土・日・祝日・年末年始・夏期休業・棚卸期間を除く）／ 午後3時までのご注文は当日発送（在庫品）／ 5万円以上送料無料")
    c.showPage()


def main():
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("FAX注文書・見積依頼書 | オイルキー株式会社")
    c.setAuthor("Oilkey Corporation")
    page(
        c,
        form_id="order",
        title="注 文 書",
        title_en="ORDER FORM",
        ref_label="貴社注文番号",
        table_cols=(
            ["商品コード", "商 品 名", "容 量", "本数", "納 期"],
            [0.16, 0.44, 0.13, 0.10, 0.17],
        ),
        shaded_last=False,
    )
    page(
        c,
        form_id="quote",
        title="見積依頼書",
        title_en="QUOTATION REQUEST",
        ref_label="貴社整理番号",
        table_cols=(
            ["商品コード", "商 品 名", "容 量", "本数", "希望納期", "弊社回答価格"],
            [0.14, 0.36, 0.11, 0.09, 0.14, 0.16],
        ),
        shaded_last=True,
    )
    c.save()
    print(f"{OUT.relative_to(ROOT)}  {OUT.stat().st_size / 1024:.0f}KB")


if __name__ == "__main__":
    main()

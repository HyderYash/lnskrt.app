from pathlib import Path

from PIL import Image
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(
    "/var/folders/0s/cnvzrzg96psbyf7d3ms60lcm0000gn/T/"
    "codex-clipboard-e6c6cbb6-b7c8-49c9-b94f-b680ae90477d.png"
)
OUTPUTS = (
    ROOT / "output/pdf/lenskart-invoice-1348342058.pdf",
    ROOT / "public/lenskart-invoice-1348342058.pdf",
)


def build_invoice(output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as invoice:
        width_px, height_px = invoice.size

    page_width = 595.0
    page_height = page_width * height_px / width_px
    pdf = canvas.Canvas(str(output), pagesize=(page_width, page_height))
    pdf.setTitle("Lenskart Tax Invoice - Order 1348342058")
    pdf.setAuthor("India Central Billing")
    pdf.setSubject("Tax invoice for order 1348342058")
    pdf.drawImage(
        ImageReader(str(SOURCE)),
        0,
        0,
        width=page_width,
        height=page_height,
        preserveAspectRatio=True,
        mask="auto",
    )
    pdf.showPage()
    pdf.save()


if __name__ == "__main__":
    if not SOURCE.exists():
        raise FileNotFoundError(f"Invoice source not found: {SOURCE}")
    for destination in OUTPUTS:
        build_invoice(destination)
        print(destination)

import sys
import subprocess
try:
    from pypdf import PdfReader
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "--quiet"])
    from pypdf import PdfReader

reader = PdfReader(r"C:\Users\Leonard Cuenta\Documents\DEV\leosan.github.com\cv_doc\CV_2026_Espaniol.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
print(text)

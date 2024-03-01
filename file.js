var check = document.getElementById("click");
var header = document.getElementById("header");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");

check.addEventListener("click", () => {
    if (check.checked) {
        header.style.backgroundColor = "#02153f";
        logo.style.color = "#fff";
        menu.style.color = "#fff";

      } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#02153f";
        menu.style.color = "#02153f";

      }
} );

function downloadPDF() {
  const pdfUrl = 'Akhilesh.pdf';
  
  const downloadLink = document.createElement('a');
  
  downloadLink.href = pdfUrl;
  downloadLink.setAttribute('download', 'AkhileshResume.pdf');

  // Error handling
  downloadLink.addEventListener('error', (error) => {
    console.error('Error occurred while downloading the PDF:', error);
    alert('Error occurred while downloading the PDF. Please try again later.');
  });

  downloadLink.click();
}

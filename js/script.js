// Simple script for CV template
// Add smooth scrolling to sections if needed

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add click event to header to scroll to top
    const header = document.querySelector('header');
    header.addEventListener('click', function(e) {
        // Don't scroll if clicking the download button
        if (e.target.id !== 'downloadPdf') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // PDF Download functionality
    const downloadBtn = document.getElementById('downloadPdf');
    downloadBtn.addEventListener('click', function() {
        downloadBtn.disabled = true;
        downloadBtn.textContent = '⏳ Generating PDF...';

        const element = document.body;
        const opt = {
            margin: 10,
            filename: 'Sean_Hill_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            downloadBtn.disabled = false;
            downloadBtn.textContent = '📥 Download CV as PDF';
        }).catch(() => {
            downloadBtn.disabled = false;
            downloadBtn.textContent = '📥 Download CV as PDF';
        });
    });

    // You can add more interactivity here, like form handling if you add a contact form
});
import React from 'react';

interface PDFViewerProps {
  className?: string;
  title?: string;
}

export default function PDFViewer({ className = "", title = "Document" }: PDFViewerProps) {
  return (
    <div className={`w-full ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="w-full h-screen border border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="/assets/Longdoc.pdf"
          className="w-full h-full"
          title={title}
        >
          <p>
            Your browser does not support PDFs. 
            <a 
              href="/assets/Longdoc.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-blue hover:underline"
            >
              Click here to download the PDF
            </a>
          </p>
        </iframe>
      </div>
    </div>
  );
} 
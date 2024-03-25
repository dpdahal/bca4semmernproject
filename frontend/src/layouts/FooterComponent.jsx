import React from 'react'

export default function FooterComponent() {
  const date = new Date().getFullYear();
  return (
    <div>
        <footer className="footer mt-5">
            <span className="text-muted">All Rights Reserved {date} @BCA</span>
        </footer>
      
    </div>
  )
}

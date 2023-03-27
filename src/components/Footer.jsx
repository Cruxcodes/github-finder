import React from 'react'

function Footer() {
    var footerYear = new Date().getFullYear()
  return (
    <div>
        <footer className=" footer p-10 bg-gray-700 text-primary-content">
            <div>
                <p >This is an svg</p>
                <p>Copyright &copy; {footerYear}. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
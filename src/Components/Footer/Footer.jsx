import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#1f1f30]'>
            <footer className="max-w-6xl mx-auto py-20">
                <div className='footer text-white grid grid-cols-2 lg:grid-cols-4 '>
                    <aside className='text-center'>
                        <div className='w-[60px] mx-auto'>
                            <img className='w-[60px]' src="https://i.ibb.co/bKfyPjG/pngaaa-com-2703194.png" alt="" />
                        </div>
                        <p>MK BooksStore.<br />Books to freshen up your bookshelf</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Category</h6>
                        <a className="link link-hover">Fantasy</a>
                        <a className="link link-hover">Fiction</a>
                        <a className="link link-hover">Young Adult</a>
                        <a className="link link-hover">Science Fiction</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
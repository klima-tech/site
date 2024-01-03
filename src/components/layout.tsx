import * as React from "react";
import { Link } from "gatsby";
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
 } from "./layout.module.css"

export interface LayoutProps  {
    pageTitle: string 
    children: React.ReactNode
 }

const Layout: React.FC<LayoutProps> = props => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/o-firmie" className={navLinkText}>O Firmie</Link></li>
                    <li className={navLinkItem}><Link to="/zakres-uslug" className={navLinkText}>Zakres usług</Link></li>
                    <li className={navLinkItem}><Link to="/realizacje" className={navLinkText}>Realizacje</Link></li>
                    <li className={navLinkItem}><Link to="/kontakt" className={navLinkText}>Kontakt</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{props.pageTitle}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
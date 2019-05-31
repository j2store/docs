import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="https://www.j2store.org/download.html" activeClassName="active" className="nav-link">Download</Link>
            </li>
            <li className="nav-item">
                <Link to="https://www.j2store.org/features.html" activeClassName="active"className="nav-link">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="https://www.j2store.org/extensions.html" activeClassName="active" className="nav-link">Extensions</Link>
            </li>
            <li className="nav-item">
                <Link to="https://www.j2store.org/support.html" activeClassName="active" className="nav-link">Support</Link>
            </li>
            <li className="nav-item">
            <li itemprop="name" class="dropdown mega mega-align-center" data-id="550" data-level="1" data-alignsub="center">
            <span className=" dropdown-toggle separator" data-target="#" data-toggle="dropdown" aria-expanded="true"> Resources<em className="caret"></em></span>
            
            <div className="nav-child dropdown-menu mega-dropdown-menu" style={{width: '250px'}} data-width="250"><div className="mega-dropdown-inner">
            <div className="row">
            <div className="col-xs-12 mega-col-nav" data-width="12"><div className="mega-inner">
            <ul itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" className="mega-nav level1">
            <li itemprop="name" className="dropdown-submenu mega" data-id="578" data-level="2">
            <a itemprop="url" className="" href="/resources/usecases.html" data-target="#">Use cases </a>
            
            <div className="nav-child dropdown-menu mega-dropdown-menu"><div className="mega-dropdown-inner">
            <div className="row">
            <div className="col-xs-12 mega-col-nav" data-width="12"><div className="mega-inner">
            <ul itemscope="" itemtype="http://www.schema.org/SiteNavigationElement" className="mega-nav level2">
            <li itemprop="name" data-id="591" data-level="3" className="">
            <a itemprop="url" className="" href="https://j2store.org/tour.html" data-target="#">By Industry</a>
            
            </li>
            </ul>
            </div></div>
            </div>
            </div></div>
            </li>
            <li itemprop="name" data-id="551" data-level="2" className="">
            <a itemprop="url" className="" href="https://j2store.org/showcase.html" data-target="#">Showcase</a>
            
            </li>
            <li itemprop="name" data-id="579" data-level="2" className="">
            <a itemprop="url" className="" href="https://j2store.org/support/video-tutorials.html" data-target="#">Video tutorials</a>
            
            </li>
            <li itemprop="name" data-id="552" data-level="2" className="">
            <a itemprop="url" className="" href="https://j2store.org/translations.html" data-target="#">Translations</a>
            
            </li>
            <li itemprop="name" data-id="556" data-level="2" className="">
            <a itemprop="url" className="" href="https://j2store.org/resources/partners.html" data-target="#">Partners </a>
            
            </li>
            <li itemprop="name" data-id="692" data-level="2" className="">
            <a itemprop="url" className="" href="https://j2store.org/resources/change-log.html" data-target="#">Change log </a>
            
            </li>
            </ul>
            </div></div>
            </div>
            </div></div>
            </li>
            </li>
            <li className="nav-item">
                <Link to="https://www.j2store.org/blog.html" activeClassName="active" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/docs" className="nav-link" activeClassName="active" partiallyActive={true} >Docs</Link>
            </li>
        </ul>
    </div>
)

export default Menu;

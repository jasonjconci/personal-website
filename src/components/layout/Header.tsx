import React from 'react';
import './Header.scss';
import { SectionInterface, section } from '../../interfaces/SectionInterface';



const Header: React.FC<SectionInterface> = ({sectionProp}) => {
    return (
        <div className="headerContainer">
            {sectionProp.map((section, index) => (
                <div key={index} className="headerItem">
                {section.name}
                </div>
            ))}
        </div>
    )
}

export default Header;
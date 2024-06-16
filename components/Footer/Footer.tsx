import './footer.scss'
import { SocialIcon, SocialIconProps } from '../SocialIcon'

interface SocialIconType {
    socialicontype: SocialIconProps[]
}

export const FooterI = ({socialicontype}: SocialIconType) => {
    return (
        <footer>
            <div className="social">
                <div className="social__group">
                    {socialicontype.map((icon, index) => (
                        <div key={index} className="social__group-icons">
                            <SocialIcon 
                                svgPath={icon.svgPath}
                                fill={icon.fill}
                                width={icon.width}
                                height={icon.height}
                            />
                            </div>
                    ))}
                </div>
                </div> 
        </footer>
    )
}
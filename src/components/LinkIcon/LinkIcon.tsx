import { useState } from 'react';
import './LinkIcon.css';

type LinkIconProps = {
    href: string;
    icon: string;
    clipboardText?: string;
    target?: string;
    onClick?: () => void;
};

function LinkIcon({
    href,
    icon,
    clipboardText,
    target,
    onClick
}: LinkIconProps) {

    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = async (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {

        if (clipboardText) {
            e.preventDefault();

            try {
                await navigator.clipboard.writeText(clipboardText);

                setShowTooltip(true);

                setTimeout(() => {
                    setShowTooltip(false);
                }, 2000);
            }
            catch (error) {
                console.error(error);
            }
        }

        onClick?.();
    };

    return (
        <a
            href={href}
            target={target}
            rel='noopener noreferrer'
            className="toclipboard"
            onClick={handleClick}
        >
            <img src={icon} alt="link-icon" />

            <span
                className={`tooltip ${showTooltip ? 'visible' : ''}`}
            >
                ¡Copiado!
            </span>
        </a>
    );
}

export default LinkIcon;
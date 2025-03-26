import "./Header.css";
import BrightHRLogoMobile from "../../../public/assets/brighthr-mobile-logo.ico";
import BrightHRLogoDesk from "../../../public/assets/brightHR-dark-blue.png";
export const Header = () => {
  return (
    <div className="header-container">
      <picture data-testid="bright-hr-logo">
        <source
          className="logo"
          media="(max-width: 768px)"
          srcSet={BrightHRLogoMobile}
        />
        <source media="(min-width: 769px)" srcSet={BrightHRLogoDesk} />
      </picture>

      <p className="telephone-number">0800 470 2432</p>
    </div>
  );
};

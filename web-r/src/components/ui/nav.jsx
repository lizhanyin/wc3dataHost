import { Link } from 'react-router-dom';
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils"


import PropTypes from 'prop-types';

const NavSelectItem = ({ ref, className, children, title, ...props }) => (
  <li>
    <Link
        className={cn(
          "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
          className,
        )}
        {...props}
        ref={ref}
      >
        <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
          {title}
        </div>
        <p className="leading-[1.4] text-mauve11">{children}</p>
    </Link>
  </li>
);

export { NavSelectItem };


NavSelectItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
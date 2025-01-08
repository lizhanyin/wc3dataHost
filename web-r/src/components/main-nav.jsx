import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav({ items }) {
  console.log(items);
  return (
    <div className="flex gap-2 md:gap-2">
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="size-9" />
      </Link>
      <Link to="/" className="flex items-center space-x-2">
        <span className="inline-block text-xl">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

MainNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};
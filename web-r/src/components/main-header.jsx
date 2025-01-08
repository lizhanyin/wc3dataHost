import { Link } from 'react-router-dom';

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/lib/utils"

export function MainHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b pl-2 pr-2">
      <div className="container flex h-14 max-w-full items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              to={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

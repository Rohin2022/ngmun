import Image from 'next/image'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Image src="/un-logo.png" alt="UN Logo" width={50} height={50} />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost">HOME</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">COMMITTEES</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">EDUCAT</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">STAT</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">IERUPS</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>REDICURBY</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4">
                  <li><Button variant="ghost">Item 1</Button></li>
                  <li><Button variant="ghost">Item 2</Button></li>
                  <li><Button variant="ghost">Item 3</Button></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export default Header
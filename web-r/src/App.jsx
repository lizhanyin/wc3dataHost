
import { BrowserRouter } from 'react-router-dom';
// import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { MainHeader } from "@/components/main-header"
import { RootLayout } from "@/components/app/layout"

function App() {

  return (
    <BrowserRouter basename="/">
      <main className={cn(
        "flex flex-col min-h-screen bg-background font-sans antialiased gap-1",
        // min-h-full p-3 gap-1 flex flex-col
        // fontSans.variable
      )}>
        <MainHeader />
        <RootLayout />
        
      </main>
    </BrowserRouter>
  )
}

export default App
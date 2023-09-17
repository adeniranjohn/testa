import Link  from 'next/link';

export default function Header(){


    return (
        <header className="m-0 p-2">
            <nav>
                <Link href="/">Logo</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
         
  
            </nav>
            
        </header>
    )
}
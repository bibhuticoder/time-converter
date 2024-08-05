import { ReactElement } from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

interface DefaultLayoutProps {
    children: ReactElement
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <div className="w-screen h-screen overflow-auto bg-gray-200 grid place-items-center">
                <main>{children}</main>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                theme="light" />
        </>
    )
}

export default DefaultLayout;
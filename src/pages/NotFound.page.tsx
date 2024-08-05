import { useSearchParams } from 'react-router-dom';
import DefaultLayout from '../layouts/default.layout'

function NotFoundPage() {

    const [searchParams] = useSearchParams()

    return (
        <DefaultLayout>
            <div className="container mt-16">
                <h1 className="text-center text-5xl mb-16 font-bold text-primary_1">NOT FOUND</h1>

                <p className="text-xl text-center">
                    The page you are looking for doesn't exist. Please retry using correct link.
                </p>
            </div>
        </DefaultLayout>
    )
}

export default NotFoundPage;
import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Principal/Footer/Footer';
import Header from '../components/Principal/Header/Header';
import { format } from "date-fns";

export default function () {
    const router = useRouter()

    const { loaction, startDate, endDate, noOfGuests } = router.query;
    

    const startDateFormatted = format(new Date(startDate), "dd MMMM yy");
    const endDateFormatted = format(new Date(endDate), "dd MMMM yy");
    const range = `${startDateFormatted} - ${endDateFormatted}`;

    return (
        <div>
            <Header />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300* Stays - {range} - for {noOfGuests} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {loaction}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3
                    tet-gray-800 whitespace-nowrap'>
                        <p className='button'>
                            Cancellation Flexibility
                        </p>
                        <p className='button'>
                            Cancellation Flexibility
                        </p>
                        <p className='button'>
                            Cancellation Flexibility
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
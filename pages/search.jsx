import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Principal/Footer/Footer';
import Header from '../components/Principal/Header/Header';
import { parseISO } from "date-fns";
import InfoCard from '../components/Secondary/InfoCard/InfoCard';

export default function ({ searchResults }) {
    const router = useRouter()

    const { location, startDate, endDate, noOfGuests } = router.query

    const startDateParsed = parseISO(new Date(startDate), 'dd MMMM yy')
    const endDateParsed = parseISO(new Date(endDate), 'dd MMMM yy')

    const range = `${startDateParsed} - ${endDateParsed}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300* Stays - {range} - for {noOfGuests} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

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
                    <div className="flex flex-col">
                        {
                            searchResults?.map(({ img, location, title, description,
                                star, total, price, long, lat }, index) => (
                                <InfoCard
                                    key={index}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    total={total}
                                    price={price}
                                />
                            ))
                        }
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json());

    return {
        props: {
            searchResults,
        },
    };
}
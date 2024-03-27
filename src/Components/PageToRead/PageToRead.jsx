import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'yellow', 'orange', 'purple', 'green'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
    const booksLoad = useLoaderData()
    const books = JSON.parse(booksLoad)
    const getBooksFromBookList = () => {
        const storedBookList = localStorage.getItem('readList');
        if (storedBookList) {
            return storedBookList;
        }
        return [];
    }
    const readListId = getBooksFromBookList();
    const readListedBooks = books.filter(book => readListId.includes(book.bookId));
    // console.log(readListedBooks);
    return (
        <div className='flex justify-center items-center mt-12 mb-20'>
            <BarChart
                width={window.innerWidth > 700? 900 : 370}
                height={450}
                data={readListedBooks}
                margin={{
                    top: 50,
                    right: 10,
                }}
            >
                <CartesianGrid strokeDasharray="" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readListedBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}
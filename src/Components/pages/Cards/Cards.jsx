import cardpic1 from "../../../assets/card1.png"
const Cards = () => {
    return (
        <div>
            <div className="w-full flex flex-col items-center py-8 px-4 bg-gray-100 shadow-md rounded-lg">
  <img className="w-24 h-24 rounded-full mx-auto mb-4" src={cardpic1} alt="John Doe"/>
  <h1 className="text-xl font-bold text-center">John Doe</h1>
  <p className="text-gray-600 text-center">Motion Graphic Designer</p>
  <div className="flex justify-center mt-4 space-x-4">
    <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H4a2 2 0 0 0-2-2V9zM4 3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 1 1v5h-4a1 1 0 0 0-1 1h-6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V3z"></path></svg>
      Join Development
    </a>
    <a href="#" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-6v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4a1 1 0 00-1-1H7a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 10-2 0v4a3 3 0 003 3h2a3 3 0 003-3z" clipRule="evenodd"></path></svg>
      Explore
    </a>
  </div>
</div>
        </div>
    );
};

export default Cards;
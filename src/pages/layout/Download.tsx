

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'Wetsvoorstel.pdf'; // Path to your hosted PDF file
        link.download = 'Wetsvoorstel.pdf';    // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex justify-center items-center mt-3">

            <button onClick={handleDownload}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mx-auto">
                Download Wetsvoorstel
            </button>
        </div>
    );
};

export default DownloadButton;
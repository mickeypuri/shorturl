
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        

        <div className="flex gap-4 flex-col sm:flex-col">
          <div className="font-bold">
            Mickey Puri
          </div>

          <div>
              Encode URL (Post route): /api/encode
          </div>


          <p>
            Decode URL (Post route): /api/decode
          </p>

          <p>
            POST body for encode:  {`{"url": "a full URL string"}`}
            <div>will return JSON with a shortUrl property</div> 
          </p>

          <p>
            POST body for decode:  {`{"shortUrl": "some short url string"}`} 
            <div>will return JSON with the corresponding full URL in a fullUrl property</div> 
          </p>
        </div>
      </main>
      
    </div>
  );
}

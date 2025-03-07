export default function page({params:{contentid}}){
    
    console.log(contentid) 
    return (
        <div>
            <h1>hello {contentid}</h1>
        </div>
    );
}
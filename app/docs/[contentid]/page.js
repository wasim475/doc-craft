export default function page({params}){
    const {contentid}= params
    console.log(contentid) 
    return (
        <div>
            <h1>hello {contentid}</h1>
        </div>
    );
}
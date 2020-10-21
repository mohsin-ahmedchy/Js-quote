const quotes = [
    {
        name:"Shannon L. Alder",
        quote:"“Being different is a revolving door in your life" +
       "where secure people enter and insecure exit.”"
    },
    {
        name:"Criss Jami, Killosophy",
        quote:"“It is not true that everyone is special."+
        "It is true that everyone was once special and still possesses the ability to recover it.”"
    },
    {
        name:"Carol Rifka Brunt",
        quote:"“…there’s just something beautiful about walking on"+
        " snow that nobody else has walked on. It makes you believe you’re special, even though you know you’re not.”"
    },
    {
        name:"Derek Landy",
        quote:"“Here she is,” her mum said, cooing at the baby,"+
        " “my special girl.”“Oh, cheers,” Valkyrie said, rolling her eyes.”"
    },
    {
        name:"Shannon Delany",
        quote:"“There is so little time. We need to make every moment count.”"
    },
    {
        name:"nora roberts",
        quote:"“If something isn't special, then it's ordinary.”"
    },
    {
        name:"Toba Beta",
        quote:"“Mankind ain't special, Kiddo.It's just you who wanna be so.”"
    },
    {
        name:"Brian Spellman",
        quote:"“I dreamed of being special then awoke to be unique.”"
    },
    {
        name:"Jonathan Cardon",
        quote:"“Being different is dangerous in a world that requires conformity”"
    },
    {
        name:"Stella Young",
        quote:"“The word 'special', as it is applied to disability, too often means 'a bit shit'.”"
    }
]

let button = document.querySelector("#btn");
let quoter = document.querySelector("#quote");
let author = document.querySelector("#author");

button.addEventListener("click", () =>{
    let number = Math.floor(Math.random() * quotes.length);
    quoter.innerHTML = quotes[number].quote;
    author.innerHTML = quotes[number].name;
}
)
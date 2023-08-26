import Button from "./components/Button"
import ExpandableText from "./components/ExpandableText"
import ListGroup from "./components/ListGroup"

function App() {

  const items: Array<string> = [
    "New York",
    "Los Angeles",
    "San Francisco",
  ]

  return (
    <div>
      <Button onClick={() => console.log('clicked!')}>Submit</Button>
      <ListGroup heading="Miami" items={items} onSelectItem={(item) => console.log(item)} />
     <ExpandableText maxChars={25}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore, iusto quo nesciunt perferendis, blanditiis consectetur unde alias voluptate laboriosam ea, vel ullam? Autem adipisci vel blanditiis debitis, consectetur sit distinctio eos reiciendis atque enim recusandae porro consequatur necessitatibus officiis architecto repudiandae laborum quas, amet itaque alias nobis exercitationem voluptatem optio fuga. Illo sit, nulla repudiandae velit quas et laborum ducimus architecto veritatis perferendis fuga nesciunt in dolorem fugit cum totam suscipit quae dignissimos iusto ipsam eveniet minus assumenda nobis? Exercitationem, architecto quaerat in expedita, nihil eaque neque sequi voluptate velit quo repellendus officiis aliquam provident rerum quidem esse assumenda.
     </ExpandableText>
    </div>
  )

}

export default App

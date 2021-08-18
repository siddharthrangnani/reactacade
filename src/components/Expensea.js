import App from "../App"

function Expensea(props) {
    const title = props.App.expenses[0].title
    const amount = props.App.expenses[0].amount
    const date = props.App.expenses[0].date

    return (
<div>

<div>
{title}
</div>

<div>
{amount}
</div>

<div>
{date}
</div>

</div>
    )
}
export default Expensea;
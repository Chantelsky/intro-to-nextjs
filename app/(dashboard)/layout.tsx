import NewTodoForm from '../components/NewTodoForm'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout

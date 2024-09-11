import './App.css';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
// import Demo from './components/Demo';
// import ErrorBoundary from './components/ErrorBoundary';
// import HookCounter from './components/HookCounter';
// import Message from './components/Message';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import FunctionClickClass from './components/FunctionClickClass';
// import Lifecycle from './components/Lifecycle';
function App() {
  return (
    <div className="App">
      {/* <Greet deptName = "CSE"/>
      <Greet deptName = "CE"/>
      <Greet deptName = "IT"/>
      <br/>
      <Welcome deptName="CSPIT"/>
      <Welcome deptName="DEPSTAR"/>

      <Message/> */}
      {/* <Lifecycle/>
      <FunctionClick/>
      <FunctionClickClass/>
      <Counter/> */}

      {/* <HookCounter/> */}
      {/* <ErrorBoundary>
        <Demo deptname="CE"/>
        <Demo deptname="IT"/>
        <Demo deptname="CSE"/>
      </ErrorBoundary> */}
      <HookCounter3/>
      <HookCounter4/>
    </div>
  );
}

export default App;
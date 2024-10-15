React LifeCycle Events:
Mount,Unmount,Before Update, Update
UseEffect is invoked for all these events.

useEffect(()=>{
//I will be called once and then on every update.
// If IAmAState changes I will be called.

    //cleanUp Operation It runs before update and during onMount
    return(()=>{
        //I will be called when component is about to update and component is about to run its last update.or before update and during onMount.
    })

},[IAmAState])

steps: 0. useEffect is called

1. Run a setTimeout
2. update State
3. Before component update, we clear the timer
4. After update, Repeat the step 1,2,3
5. Check if the duration is 0 then stop further update.

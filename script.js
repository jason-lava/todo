// IMPORTANT GUIDELINES
// 1. this is NOT a traditional todo list,
// items are not to be scheduled for future dates,
// this is a bit more "forceful" approach to
// motivate the user to accomplish
// the pertinent tasks today and not put off
// 2. we SHOULD allow carry over of X items,
// as we can't always accomplish everything daily

// FUTURE IMPLEMENTATIONS:
// 1. limit items to 10-15 items max,
// when they complete items, they can add more
// 2. allow ranking system,
// this could be a drag and drop to order, 
// or a color based system
// 3. allow completed items to be moved back to todo
// 4. allow daily carry over

const todoItems = document.querySelectorAll('.todo');
const todoCompleted = document.querySelectorAll('.completed');
const todoAdd = document.getElementById("todoAdd");

todoAdd.addEventListener('click', e => {
    

    item.classList.remove("todo");
    console.log(item);
    item.classList.add("completed");
    console.log(item);

});

todoItems.forEach(item => {

    console.log(todoItems);

    item.addEventListener('click', e => {

        // todoItems.forEach(item => {
        //     item.classList.remove("todo");
        // });
        
        console.log(item);
        item.classList.remove("todo");
        console.log(item);
        item.classList.add("completed");
        console.log(item);

    });

});



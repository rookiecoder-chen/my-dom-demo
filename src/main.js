const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素



// const div = dom.create("<div>newDiv</div>");
// console.log(div);
// dom.after(test, div);

// const div3 = dom.create(`<div id="parent">test's parent</div>`);
// dom.wrap(test, div3);

// const nodes = dom.empty(window.empty);
// console.log(nodes);

// dom.attr(test, "title", "Hi, i am frank");
// let title = dom.attr(test, "title");
// console.log(title);

// dom.text(test, "你好，这是新的内容");
// console.log(dom.text(test));
// // dom.html(test, "1243");

// dom.style(test, { border: "1px solid red", color: "blue" });
// dom.style(test, "border", "1px solid black");
// console.log(dom.style(test, "border"));

// dom.class.add(test, "red");

// console.log(dom.class.has(test, "red"))

// const fn = () => {
//     console.log('点击了')
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)


// const testDiv = dom.find('#test')[0]
// console.log(testDiv)

// dom.parent(test)

// const s2 = dom.find('#s2')[0]
// console.log(dom.siblings(s2))
// console.log(dom.next(s2))
// console.log(dom.previous(s2))

// const t = dom.find('#travel')[0]
// // console.log(t)
// // dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))
// dom.each(t, (n) => console.log(n))

// console.log(s2)
// console.log(dom.index(s2))

function tellStory(attributes){
    return `This is ${attributes[0]}. ${attributes[0]} is a nice person. Today they are ${attributes[1]}. They are ${attributes[2]} all day. The end.`
}

console.log(tellStory(["Marko","happy","studying"]));
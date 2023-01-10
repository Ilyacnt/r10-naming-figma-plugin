figma.showUI(__html__, {width: 470, height: 420});

figma.clientStorage.getAsync('savedData').then(data => {
  figma.ui.postMessage(data)
})



figma.ui.onmessage = msg => {

  if (msg.type === 'cancel') {

    figma.closePlugin()

  } else if (msg.type === 'action') {

    const {designerColor, offer, buyer, sequenceFrom, orderBy} = msg.formData
    
    const renameNode = (node: SceneNode, number: String | Number) => {
      node.name = `${offer}_${buyer}_${designerColor}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}_${number}`
    }


    figma.clientStorage.setAsync('savedData', {
      designerColor,
      offer,
      buyer,
      orderBy
    })

    
    let selectedFrames = figma.currentPage.selection
    selectedFrames = selectedFrames.filter(frame => frame.type === 'FRAME') as FrameNode[]


    if (selectedFrames.length <= 0) {

      figma.notify('Nothing selected')

    } else if (orderBy === 'layerPanel') {
      
      let counter = sequenceFrom
      selectedFrames.forEach(frame => {
        renameNode(frame, counter)
        counter++
      })
      

    } else if (orderBy === 'topToBottom') {

      // @ts-ignore
      selectedFrames.sort((a, b) => {
        if (a.x < b.x) return -1;
        if (a.x > b.x) return 1;

        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
      })

      let counter = sequenceFrom
      selectedFrames.forEach(frame => {
        renameNode(frame, counter)
        counter++
      })
      
      
    } else if (orderBy === 'leftToRight') {
      
      // @ts-ignore
      selectedFrames.sort((a, b) => {
        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
        
        if (a.x < b.x) return -1;
        if (a.x > b.x) return 1;
      })

      let counter = sequenceFrom
      selectedFrames.forEach(frame => {
        renameNode(frame, counter)
        counter++
      })


    }

    figma.notify('Frames renamed successfully')  
    


  }




  // figma.closePlugin();
};

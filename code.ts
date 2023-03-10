figma.showUI(__html__, {width: 470, height: 420});

figma.clientStorage.getAsync('savedData').then(data => {
  figma.ui.postMessage(data)
})


figma.ui.onmessage = msg => {

  if (msg.type === 'cancel') {

    figma.closePlugin()

  } else if (msg.type === 'action') {

    const {designerColor, offer, buyer, sequenceFrom, orderBy, numberOfResizes, isTemplateNaming} = msg.formData
    
    const renameNode = (node: SceneNode, number: String | Number, isTemplateNaming: Boolean) => {  
      if (!isTemplateNaming) {
        node.name = `${offer}_${buyer}_${designerColor}_${number}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}`
      } else {
        // @ts-ignore
        node.name = `${findIdentificationLayer(node, offer)}_${buyer}_${designerColor}_${number}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}`
      }
    }

    figma.clientStorage.setAsync('savedData', {
      designerColor,
      offer,
      buyer,
      orderBy,
      numberOfResizes,
      isTemplateNaming
    })
    
    let selectedFrames = figma.currentPage.selection.filter(frame => frame.type === 'FRAME') as FrameNode[]

    if (selectedFrames.length <= 0) {

      figma.notify('Nothing selected')

    } else if (orderBy === 'topToBottom') {
      sortFramesTopToBottom(selectedFrames)
    } else if (orderBy === 'leftToRight') {
      sortFramesLeftToRight(selectedFrames)
    }

    let counter = sequenceFrom
    let counterResizes = 1
    selectedFrames.forEach(frame => {
      renameNode(frame, counter, isTemplateNaming)
      if (counterResizes < numberOfResizes) {
        counterResizes++
        counter = counter
      }
      else if (counterResizes >= numberOfResizes) {
        counterResizes = 1
        counter++
      }
    })

    figma.notify('Frames renamed successfully')  
  }

};

const sortFramesTopToBottom = (frames: FrameNode[]) => {
  // @ts-ignore
  return frames.sort((a, b) => {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;

    if (a.y < b.y) return -1;
    if (a.y > b.y) return 1;
  })
}

const sortFramesLeftToRight = (frames: FrameNode[]) => {
  // @ts-ignore
  return frames.sort((a, b) => {
    if (a.y < b.y) return -1;
    if (a.y > b.y) return 1;
    
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
  })
}

const findIdentificationLayer = (frame: FrameNode, offer: string) => {
  // @ts-ignore
  const identificationNode = frame.findOne(node => {
    if (node.type === "TEXT" && node.name[0] === '#') {
      return true
    } else {
      return false
    }
  })

  if (identificationNode) {
    // @ts-ignore
    return identificationNode.name.substring(1)
  } else {
    return offer
  }
  
}
import { generateCode, sortFramesLeftToRight, sortFramesTopToBottom } from "./figmaAPI/utils";


figma.showUI(__html__, {width: 490, height: 490});

figma.clientStorage.getAsync('savedData').then(data => {
  figma.ui.postMessage(data)
})


let stateUI = null
figma.ui.onmessage = msg => {

  if (msg.type === 'cancel') {

    figma.closePlugin()

  } else if (msg.type === 'ga') {

    const { designerColor, offer, buyer, from, orderBy } = stateUI.ga
    const { numberOfResizes } = stateUI.settings
    
    let isTemplateNaming = false

    const renameNode = (node: SceneNode, number: String | Number, isTemplateNaming: Boolean) => {  
      if (!isTemplateNaming) {
        node.name = `${offer}_${buyer}_${designerColor}_${number}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}`
      } else {
        // @ts-ignore
        node.name = `${findIdentificationLayer(node, offer)}_${buyer}_${designerColor}_${number}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}`
      }
    }

    
    let selectedFrames = figma.currentPage.selection.filter(frame => frame.type === 'FRAME') as FrameNode[]

    if (selectedFrames.length <= 0) {

      figma.notify('Nothing selected')

    } else if (orderBy === 'Top to Bottom') {
      sortFramesTopToBottom(selectedFrames)
    } else if (orderBy === 'Left to Right') {
      sortFramesLeftToRight(selectedFrames)
    }

    let counter = from
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
  } else if (msg.type === 'default') {
    const { offer, buyer, designerColor, orderBy, creoType } = stateUI.default
    const { numberOfResizes } = stateUI.settings

    
    const renameNode = (node: SceneNode, code: String | Number) => {
      node.name = `${offer}_${buyer}_${designerColor}_${code}_${creoType}_${(node.width).toFixed(0)}x${(node.height).toFixed(0)}`
    }

    let selectedFrames = figma.currentPage.selection.filter(frame => frame.type === 'FRAME') as FrameNode[]

    if (selectedFrames.length <= 0) {

      figma.notify('Nothing selected')

    } else if (orderBy === 'Top to Bottom') {
      sortFramesTopToBottom(selectedFrames)
    } else if (orderBy === 'Left to Right') {
      sortFramesLeftToRight(selectedFrames)
    }



    let code = generateCode()
    let counter = 1
    selectedFrames.forEach(frame => {      
      if (counter <= numberOfResizes) {
        renameNode(frame, code)
        code = code
      } else {
        code = generateCode()
        renameNode(frame, code)
        counter = 1
      }
      counter++
    })


  } else if (msg.type === 'save') {
    figma.clientStorage.setAsync('savedData', msg.state)
    stateUI = msg.state
  };



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

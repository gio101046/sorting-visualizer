import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Window 2.12
import Qt.labs.qmlmodels 1.0

ApplicationWindow {
    width: 640
    height: 480
    visible: true
    title: qsTr("Algorithms Visualizer")

    Rectangle {
        id: rectangleContainer
        width: 640
        height: 480
        color: "white"

        TabBar {
            id: tabBar
            width: 640
            height: 30
            layer.format: ShaderEffectSource.RGBA
            background: Rectangle {
                color: "white"
            }

            TabButton {
                id: bubbleTab
                text: qsTr("Bubble Sort")
                font.pointSize: 16
                display: AbstractButton.TextOnly
                background: Rectangle {
                    color: tabBar.currentIndex == 0 ? "grey" : "white"
                    border.color: "black"

                    radius: 2
                }
            }

            TabButton {
                id: insertionTab
                text: qsTr("Insertion Sort")
                font.pointSize: 16
                display: AbstractButton.TextOnly
                background: Rectangle {
                    color: tabBar.currentIndex == 1 ? "grey" : "white"
                    border.color: "black"
                    radius: 2
                }
            }

            TabButton {
                id: mergeTab
                text: qsTr("Merge Sort")
                font.pointSize: 16
                display: AbstractButton.TextOnly
                background: Rectangle {
                    color: tabBar.currentIndex == 2 ? "grey" : "white"
                    border.color: "black"
                    radius: 2
                }
            }
        }

        Text {
            id: someText
            anchors.centerIn: parent
            text: "Hello, World!"
            font.pointSize: 36
        }

        GridView {
            id: gridView
            width: 640
            height: 450
            x: 0
            y: 30
            model: ListModel {
                ListElement {
                    colorCode: "grey"
                }

                ListElement {
                    name: "Red"
                    colorCode: "red"
                }

                ListElement {
                    name: "Blue"
                    colorCode: "blue"
                }

                ListElement {
                    name: "Green"
                    colorCode: "green"
                }
            }
            cellWidth: 20
            delegate: Item {
                height: 40
                Column {
                    spacing: 0
                    Rectangle {
                        width: 20
                        height: 20
                        color: colorCode
                        anchors.horizontalCenter: parent.horizontalCenter
                        //border.color: "gray"
                    }
                }
            }
            cellHeight: 70
        }
    }
}

/*##^##
Designer {
    D{i:0;formeditorZoom:0.9}
}
##^##*/

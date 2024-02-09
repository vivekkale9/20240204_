/*We have to implement Linked list
 * Also we have to perform all the operations on it
 */


/** This is a class to create a node
 * @param {any} data the data to be entered in the node
 */
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

// This is a function to create a linked list
class LinkedList {
    constructor(head = null) {
        this.head = head
        this.tail = head
        this.length = 1
    }

    // To print the entire linked list
    printList() {
        let current = this.head;
    
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    /** This is a function to add element at the end of a linked list
     * @param {any} data the data to be entered in the node
     */
    append(data){
        let new_node = new ListNode(data);
        // If there is no element in the linked list
        if(this.length===0){
            this.head = new_node;
        }
        else{
            this.tail.next = new_node;
            this.tail = new_node
    
        }
        this.length += 1;
    }

    /** This is function to add elemetn at the start of the linked list
     * @param {any} data the data to be entered in the node
     */
    addStart(data){
        let new_node = new ListNode(data);
        // If there is not element in the linked list
        if(this.length===0){
            this.head = new_node
            this.tail = new_node
        }
        else{
            new_node.next = this.head;
            this.head = new_node;
        }
        this.length += 1;
    }

    /** This is a function to add element at any place in between
     * @param {any} data the data to be entered in the node 
     * @param {Number} location the location at which you want to add the node
     * @throws {Error} when the location is invalid
     */
    inBetween(data,location){
        // try to convert the location into int
        const locationInt = parseInt(location);
        if(isNaN(locationInt)){
            console.log("Invalid location input. Please give valid integer.");
        return; // Exit the function if location is not a valid integer
        }
        
        let new_node = new ListNode(data);
        let current = this.head;
        // If there is no element in the linked list
        if(this.length===0){
            this.head = new_node
        }
        /* If the given location is greater than the length then add
         * the element at the end of linked list
         */
        else if (location >= this.length) {
            this.append(data);
        }
        else{
            for(let i=0;i<location;i++ ){
                current = current.next;
            }
            new_node.next = current.next;
            current.next = new_node;
        }
        this.length += 1;
    }

    /** This is a function to delete the element
     * @param {Number} location the index of the element you want to delete
     * @throws {Error} when the location is invalid
     */
    delete(location) {
        // Try to convert the location into int
        const intLocation = parseInt(location)
        if(isNaN(intLocation)){
            console.log("location entered is not valid");
            return; // If the location is invalid exit the function
        }
        // If there is no element in the linked list
        if (this.length === 0) {
            console.log("No element is present");
        } else {
            // If the location =  then delete element at the start
            if (location === 0) {
                // If only 1 element is present in the linked list
                if (this.length === 1) {
                    this.head = null;
                    this.tail = null;
                } else {
                    this.head = this.head.next;
                }
            } 
            // If the location = -1 then delete the element at the last
            else if (location === -1) {
                // If only 1 element is present in the linked list
                if (this.length === 1) {
                    this.head.next = null;
                    this.head = null;
                    this.tail = null;
                } else {
                    let current = this.head;
                    while (current.next !== this.tail) {
                        current = current.next;
                    }
                    current.next = null;
                    this.tail = current;
                }
            } else {
                let current = this.head;
                let prev = null;
                let index = 0;
                while (index < location && current !== null) {
                    prev = current;
                    current = current.next;
                    index += 1;
                }
                if (current !== null) {
                    prev.next = current.next;
                    current.next = null;
                }
            }
            this.length -= 1;
        }
    }
    
    /** This is a function to search the element
     * @param {any} target the element that you want to search
     * @returns false if there is no such element present
     */
    search(target){
        let current = this.head;
        let index = 0;
        while(current!== null){
            if(current.data===target){
                return index;
            }
            
            index+=1;
            current = current.next;
        }
        return false;
    }

}

let node1 = new ListNode(2)
let list = new LinkedList(node1)
list.append(3);



list.addStart(1);
list.printList();
list.delete(1);
console.log("deleted 1");
list.printList();






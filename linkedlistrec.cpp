#include <iostream>

struct Node {
	int data;
	Node* link;
};

Node* insert(Node* list,int x);
void printList(Node* list);
void reversePrint(Node* list);

struct Node* head;

int main(void) {
	head = NULL;
	int n;
	std::cout << "How many numbers? ";
	std::cin >> n;

	for(int i = 1; i <= n; i++) {
		head = insert(head,i*2);
	}

	// printList(head);

	// printList(head);
	reversePrint(head);

	return 0;
}

void printList(Node* p) {
	std::cout << p->data << std::endl;
	if(p->link == NULL) return;
	printList(p->link);
}

void reversePrint(Node* p) {
	if(p == NULL) return;
	printList(p->link);
	std::cout << p->data << std::endl;
}

Node* insert(Node* head, int data) {
	Node* newEnd = new Node();
	newEnd->data = data;
	newEnd->link = NULL;
	if(head == NULL) {
		std::cout<<"added first item " << data << std::endl;
		head = newEnd;
	} else {
		//go to the end and add newEnd to it
		Node* temp1 = head;
		while(temp1->link != NULL) temp1 = temp1->link;
		temp1->link = newEnd;
		std::cout<<"added " << data << " to end " << std::endl;
	}
	return head;
	//now reset our head to be our new list
}
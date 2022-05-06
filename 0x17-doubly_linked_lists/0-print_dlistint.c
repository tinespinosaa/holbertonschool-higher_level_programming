#include "lists.h"
/**
* print_dlistint - Prints all the elements of a list
* @h: head of list
* Return: number of nodes
*/
size_t print_dlistint(const dlistint_t *h)
{
	const dlistint_t *temp = h;
	int i = 0;

	while (temp != NULL)
	{
		printf("%d\n", temp->n);
		i += 1;
		temp = temp->next;
	}
	return (i);
}

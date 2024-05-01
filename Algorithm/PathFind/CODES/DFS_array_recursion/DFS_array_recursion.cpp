#include <iostream>
#include <vector>
#include <array>

using namespace std;

// �̵� ���
vector<array<int, 2>> route;

// visited array + reculsion
void DFS_array_reculsion(array<array<int, 10>, 10>& map_arr, array<array<bool, 10>, 10>& visited, int& N, int& M, int now_x, int now_y) {
	// �̹� �湮�� ���� ����
	if (!visited[now_x][now_y]) return;
	// �̵� ���̵�, 4 ����
	array<array<int, 2>, 4> move_guide;
	move_guide[0] = { 0, 1 };
	move_guide[1] = { 1, 0 };
	move_guide[2] = { 0, -1 };
	move_guide[3] = { -1, 0 };
	// �湮 ǥ��
	visited[now_x][now_y] = false;
	// ��� �߰�
	route.push_back({ now_x, now_y });
	for (int i = 0; i < 4; i++) {
		// ���� �ĺ� �ε���
		int next_x = now_x + move_guide[i][0];
		int next_y = now_y + move_guide[i][1];
		//// �ĺ� �ε����� ���ǿ� �����ϸ�
		// �ε��� �����ȿ� �����ϴ���
		// �湮���� ���� �ε�������
		// ���� �ƴ���
		if ((next_x >= 0 and next_x < N) and (next_y >= 0 and next_y < M) and
			(visited[next_x][next_y]) and
			(map_arr[next_x][next_y] == 0)) {
			DFS_array_reculsion(map_arr, visited, N, M, next_x, next_y);
		}
	}
}

int main(void) {
	// ������ ũ��, �� / ��
	int N = 10;
	int M = 10;
	// �� ����, 0 : �� / 1 : ��
	array<array<int, 10>, 10> map_arr;
	map_arr[9] = { 1, 0, 1, 1, 0, 0, 0, 1, 0, 0 };
	map_arr[8] = { 0, 0, 1, 1, 0, 1, 0, 0, 0, 1 };
	map_arr[7] = { 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 };
	map_arr[6] = { 0, 0, 0, 1, 1, 0, 0, 0, 1, 0 };
	map_arr[5] = { 1, 1, 0, 1, 0, 1, 1, 0, 1, 0 };
	map_arr[4] = { 0, 0, 0, 1, 0, 1, 0, 0, 0, 0 };
	map_arr[3] = { 1, 1, 0, 0, 0, 0, 0, 1, 1, 0 };
	map_arr[2] = { 1, 1, 0, 1, 0, 1, 0, 0, 1, 1 };
	map_arr[1] = { 1, 0, 0, 1, 0, 0, 1, 0, 1, 0 };
	map_arr[0] = { 0, 0, 1, 0, 0, 1, 1, 1, 1, 0 };
	// �湮 ���
	array<array<bool, 10>, 10> visited;
	// �湮 ��� true �� �ʱ�ȭ
	for (int i = 0; i < N; i++) visited[i].fill(true);
	// �Լ� ����
	DFS_array_reculsion(map_arr, visited, N, M, 0, 0);

	cout << "[ ";
	for (auto arr : route) {
		cout << "[ " << arr[0] << " " << arr[1] << " ] ";
	}
	cout << "]\n";
}
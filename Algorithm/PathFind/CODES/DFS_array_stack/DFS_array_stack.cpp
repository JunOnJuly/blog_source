#include <iostream>
#include <vector>
#include <array>

using namespace std;

// visited array + stack
vector<array<int, 2>> DFS_array_stack(array<array<int, 10>, 10>& map_arr, int& N, int& M) {
	// �̵� ���̵�, 4 ����
	array<array<int, 2>, 4> move_guide;
	move_guide[0] = { 0, 1 };
	move_guide[1] = { 1, 0 };
	move_guide[2] = { 0, -1 };
	move_guide[3] = { -1, 0 };
	// ��� �̵���� ���
	vector<array<int, 2>> routes;
	// ����
	vector<array<int, 2>> stk = { {0, 0} };
	// �湮 ���
	array<array<bool, 10>, 10> visited;
	// �湮 ��� true �� �ʱ�ȭ
	for (int i = 0; i < 10; i++) visited[i].fill(true);
	// ������ �� �� ���� Ž��
	while (!stk.empty()) {
		// ���� �ε���
		int now_x = stk.back()[0];
		int now_y = stk.back()[1];
		// �湮 ���
		visited[now_x][now_y] = false;
		// �̵���� ���
		routes.push_back({ now_x, now_y });
		// �̵� ���̵带 ���� �׹��� Ž��
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
				// ���ÿ� ����
				stk.push_back({ next_x, next_y });
				// �ٷ� ���� �ε��� Ž��
				break;
			}
			// ���ǿ� �����ϴ� �ĺ� �ε����� �������� ������
			else if (i == 3) {
				// ���ÿ��� ��
				stk.pop_back();
			}
		}
	}

	return routes;
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

	cout << "[ ";
	for (auto arr : DFS_array_stack(map_arr, N, M)) {
		cout << "[ " << arr[0] << " " << arr[1] << " ] ";
	}
	cout << "]\n";
}
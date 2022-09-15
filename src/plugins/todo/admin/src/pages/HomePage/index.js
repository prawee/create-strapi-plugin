/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
// import pluginId from '../../pluginId';

import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Button } from '@strapi/design-system/Button';
import Plus from '@strapi/icons/Plus';
import { nanoid } from 'nanoid';

import { Illo } from '../../components/IIIo';
import TodoModal from '../../components/TodoModal';
import TodoCount from '../../components/TodoCount';
import TodoTable from '../../components/TodoTable';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(data) {
    alert("Add Edit Todo in API");
  }

  return (
    <Layout>
      <BaseHeaderLayout 
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {/* <p>Happy Strapi coding</p> */}
        {todoData.length === 0 
        ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                startIcon={<Plus />}
                variant="secondary"
                onClick={() => setShowModal(true)}
              >
                Add your first todo
              </Button>
            }
          />
        )
        : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default memo(HomePage);

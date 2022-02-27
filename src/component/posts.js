import * as React from "react"
import { 
	List, 
	Datagrid, 
	TextField, 
	ReferenceField, 
	Edit, 
	SimpleForm, 
	SelectInput, 
	TextInput,
	Create
 } from "react-admin"

export const PostList = props => (
	<List {...props} rowClick="edit">
		<Datagrid>
			<ReferenceField source="userId" reference="users">
				<TextField source="name" />
			</ReferenceField>
			<TextField source="id" />
			<TextField source="title" />
			<TextField source="body" />
		</Datagrid>
	</List>
)

export const PostEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<ReferenceField source="userId" reference="users">
				<SelectInput optionText="id" />
			</ReferenceField>
			<TextInput source="id"/>
			<TextInput source="title"/>
			<TextInput source="body" />
		</SimpleForm>
	</Edit>
)

export const PostCreate = props => (
	<Create {...props}>
		<SimpleForm>
		<ReferenceField source="userId" reference="users">
				<SelectInput optionText="name" />
			</ReferenceField>
			<TextInput source="id"/>
			<TextInput source="title"/>
			<TextInput multiline source="body" />
		</SimpleForm>
	</Create>
)
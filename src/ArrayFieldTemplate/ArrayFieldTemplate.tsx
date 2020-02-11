import React from 'react';

import {
  isMultiSelect,
  getDefaultRegistry,
} from 'react-jsonschema-form/lib/utils';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { ArrayFieldTemplateProps, IdSchema } from 'react-jsonschema-form';

import AddButton from '../AddButton/AddButton';
import IconButton from '../IconButton/IconButton';
import Divider from '@material-ui/core/Divider';

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  const { schema, registry = getDefaultRegistry() } = props;

  if (isMultiSelect(schema, registry.definitions)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

type ArrayFieldTitleProps = {
  TitleField: any;
  idSchema: IdSchema;
  title: string;
  required: boolean;
};

const ArrayFieldTitle = ({
  TitleField,
  idSchema,
  title,
  required,
}: ArrayFieldTitleProps) => {
  if (!title) {
    return <div />;
  }

  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} required={required} />;
};

type ArrayFieldDescriptionProps = {
  DescriptionField: any;
  idSchema: IdSchema;
  description: string;
};

const ArrayFieldDescription = ({
  DescriptionField,
  idSchema,
  description,
}: ArrayFieldDescriptionProps) => {
  if (!description) {
    return <div />;
  }

  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const DefaultArrayItem = (props: any) => {
  return (
    <Grid container key={props.index} spacing={2}>
      <Grid item xs>
        <Box mb={1}>{props.children}</Box>
      </Grid>

      <Grid item>
        <Divider orientation="vertical" light />
      </Grid>

      {props.hasToolbar && (
        <Grid item>
          <Box>
            {props.index > 0 ? <Divider light /> : null}
            {(props.hasMoveUp || props.hasMoveDown) && (
              <IconButton
                icon="arrow-up"
                tooltip="Move Up"
                className="array-item-move-up"
                disabled={props.disabled || props.readonly || !props.hasMoveUp}
                onClick={props.onReorderClick(props.index, props.index - 1)}
              />
            )}

            {(props.hasMoveUp || props.hasMoveDown) && (
              <IconButton
                icon="arrow-down"
                tooltip="Move Down"
                disabled={
                  props.disabled || props.readonly || !props.hasMoveDown
                }
                onClick={props.onReorderClick(props.index, props.index + 1)}
              />
            )}

            {props.hasRemove && (
              <IconButton
                icon="remove"
                tooltip="Remove"
                disabled={props.disabled || props.readonly}
                onClick={props.onDropIndexClick(props.index)}
              />
            )}
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

const DefaultFixedArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema['ui:description'] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className="array-item-add"
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
          label={props.uiSchema.buttonLabel}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <ArrayFieldTitle
          key={`array-field-title-${props.idSchema.$id}`}
          TitleField={props.TitleField}
          idSchema={props.idSchema}
          title={props.uiSchema['ui:title'] || props.title}
          required={props.required}
        />

        {(props.uiSchema['ui:description'] || props.schema.description) && (
          <ArrayFieldDescription
            key={`array-field-description-${props.idSchema.$id}`}
            DescriptionField={props.DescriptionField}
            idSchema={props.idSchema}
            description={
              props.uiSchema['ui:description'] || props.schema.description
            }
          />
        )}

        <Grid container={true} key={`array-item-list-${props.idSchema.$id}`}>
          {props.items && props.items.map(p => DefaultArrayItem(p))}
          {props.items.length ? (
            <Grid item xs={12}>
              <Box mt={1}>
                <Divider />
              </Box>
            </Grid>
          ) : null}
          {props.canAdd && (
            <Grid container justify="flex-end">
              <Grid item={true}>
                <Box mt={2}>
                  <AddButton
                    className="array-item-add"
                    onClick={props.onAddClick}
                    disabled={props.disabled || props.readonly}
                    {...(props.uiSchema['ui:options'] && {
                      label: props.uiSchema['ui:options'][
                        'addButtonLabel'
                      ] as string,
                    })}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </Paper>
  );
};

export default ArrayFieldTemplate;

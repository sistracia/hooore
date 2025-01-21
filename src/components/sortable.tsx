"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DraggableAttributes,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import { type SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import {
  arrayMove,
  defaultAnimateLayoutChanges,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn } from "@hooore/utils";
import { DragHandleDots2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type SortableItemProps = {
  id: UniqueIdentifier;
  onRemove: () => void;
  children: (params: {
    removeButton: React.ReactNode;
    dragButton: React.ReactNode;
    setActivatorNodeRef: (element: HTMLElement | null) => void;
    listeners: SyntheticListenerMap | undefined;
    attributes: DraggableAttributes;
  }) => React.ReactNode;
};

function SortableItem({ id, children, onRemove }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({
    id,
    animateLayoutChanges: (args) => {
      return defaultAnimateLayoutChanges({ ...args, wasDragging: true });
    },
  });

  const dragButton = (
    <Button
      ref={setActivatorNodeRef}
      {...listeners}
      {...attributes}
      type="button"
      variant="ghost"
      size="icon"
      className="dd-h-[40px] dd-w-[40px]"
    >
      <DragHandleDots2Icon className="dd-h-4 dd-w-4" />
    </Button>
  );

  const removeButton = (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="dd-h-[40px] dd-w-[40px]"
      onClick={(event) => {
        event.stopPropagation();
        onRemove?.();
      }}
    >
      <TrashIcon className="dd-h-4 dd-w-4" />
    </Button>
  );

  return (
    <li
      className={cn(
        "dd-relative dd-bg-background",
        isDragging ? "dd-z-50" : "dd-z-0"
      )}
      ref={setNodeRef}
      style={{
        transition,
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
    >
      {children({
        removeButton,
        dragButton,
        setActivatorNodeRef,
        listeners,
        attributes,
      })}
    </li>
  );
}

export type SortableItem =
  | UniqueIdentifier
  | {
      id: UniqueIdentifier;
      [k: string]: unknown;
    };

function getItemUniqueIdentifier(item: SortableItem) {
  if (typeof item === "object") {
    return item.id;
  }

  return item;
}

export type SortableProps<TItem extends SortableItem> = {
  items: TItem[];
  setItems?: (newItems: TItem[]) => void;
  onSwap?: (fromIndex: number, toIndex: number) => void;
  onRemove?: (index: number) => void;
  children: (
    params: Parameters<SortableItemProps["children"]>[0] & {
      item: TItem;
      itemIndex: number;
    }
  ) => ReturnType<SortableItemProps["children"]>;
};

export function Sortable<TItem extends SortableItem>({
  children,
  items,
  setItems,
  onSwap,
  onRemove,
}: SortableProps<TItem>) {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over === null || active.id === over.id) {
      return;
    }

    const oldIndex = items.findIndex((item) => {
      return getItemUniqueIdentifier(item) === active.id;
    });

    const newIndex = items.findIndex((item) => {
      return getItemUniqueIdentifier(item) === over.id;
    });

    if (onSwap) {
      onSwap(oldIndex, newIndex);
    }

    if (setItems) {
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  }

  const handleRemove = (id: UniqueIdentifier) => {
    if (onRemove) {
      const itemIndex = items.findIndex((item) => {
        return getItemUniqueIdentifier(item) === id;
      });

      onRemove(itemIndex);
    }

    if (setItems) {
      const newitems = items.filter((item) => {
        return getItemUniqueIdentifier(item) !== id;
      });

      setItems(newitems);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul>
          {items.map((item, itemIndex) => {
            const id = getItemUniqueIdentifier(item);
            return (
              <SortableItem
                id={id}
                key={id}
                onRemove={() => {
                  handleRemove(id);
                }}
              >
                {(params) => {
                  return children({ ...params, item, itemIndex });
                }}
              </SortableItem>
            );
          })}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
